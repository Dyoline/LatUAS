'use client';
import styles from './KegiatanPage.module.css';
import { useEffect, useState } from 'react';

export default function KegiatanPage() {
    const [formVisible, setFormVisible] = useState(false);
    const [kegiatans, setKegiatans] = useState([]);
    const [organisasis, setOrganisasis] = useState([]);
    const [judul_kegiatan, setJudulKegiatan] = useState('');
    const [id_organisasi, setIdOrganisasi] = useState('');
    const [tanggal_kegiatan, setTanggalKegiatan] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [jenis_kegiatan, setJenisKegiatan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [tautan, setTautan] = useState('');
    const [msg, setMsg] = useState('');
    const [editId, setEditId] = useState(null);

    const fetchKegiatans = async () => {
        const res = await fetch('/api/kegiatan');
        const data = await res.json();
        setKegiatans(data);
    };
    const fetchOrganisasis = async () => {
        const res = await fetch('api/organisasi');
        const data = await res.json();
        setOrganisasis(data);
    }
    useEffect(() => {
        fetchKegiatans();
        fetchOrganisasis()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editId ? 'PUT' : 'POST';
        const res = await fetch('/api/kegiatan', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: editId,
                judul_kegiatan,
                id_organisasi,
                tanggal_kegiatan,
                lokasi,
                jenis_kegiatan,
                deskripsi,
                tautan
            }),
        });

        if (res.ok) {
            setMsg('Saved Successfully!');
            setJudulKegiatan('');
            setIdOrganisasi('');
            setTanggalKegiatan('');
            setLokasi('');
            setJenisKegiatan('');
            setDeskripsi('');
            setTautan('');
            setEditId(null);
            setFormVisible(false);
            fetchKegiatans();
        } else {
            setMsg('Failed to Save Data!');
        }
    };

    const handleEdit = (item) => {
        setJudulKegiatan(item.judul_kegiatan);
        setIdOrganisasi(item.id_organisasi);
        setTanggalKegiatan(item.tanggal_kegiatan);
        setLokasi(item.lokasi);
        setJenisKegiatan(item.jenis_kegiatan);
        setDeskripsi(item.deskripsi);
        setTautan(item.tautan);
        setEditId(item.id);
        setFormVisible(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are You Sure?')) return;
        await fetch('/api/kegiatan', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        fetchKegiatans();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Kegiatan</h1>
            <button
                className={styles.buttonToggle}
                onClick={() => setFormVisible(!formVisible)}
            >
                {formVisible ? 'Tutup Form' : 'Tambah Data'}
            </button>

            {formVisible && (
                <div className={styles.formWrapper}>
                    <h3>Input Data Baru</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <span>Judul Kegiatan</span>
                            <input
                                type='text'
                                value={judul_kegiatan}
                                onChange={(e) => setJudulKegiatan(e.target.value)}
                                placeholder='Masukkan Judul Kegiatan'
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span>ID Organisasi</span>
                            <select
                                value={id_organisasi}
                                onChange={(e) => {
                                    const selectedId = e.target.value;
                                    setIdOrganisasi(selectedId);

                                    const id_organisasi = organisasis.find(c => c.id === selectedId);
                                }}
                                required
                            >
                                <option value="">Pilih ID Organisasi</option>
                                {organisasis.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.id} - {item.nama_organisasi}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Tanggal Kegiatan</span>
                            <input
                                type='date'
                                value={tanggal_kegiatan}
                                onChange={(e) => setTanggalKegiatan(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span>Lokasi</span>
                            <input
                                type='text'
                                value={lokasi}
                                onChange={(e) => setLokasi(e.target.value)}
                                placeholder='Masukkan Lokasi'
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span>Jenis Kegiatan</span>
                            <input
                                type='text'
                                value={jenis_kegiatan}
                                onChange={(e) => setJenisKegiatan(e.target.value)}
                                placeholder='Masukkan Jenis Kegiatan'
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span>Deskripsi</span>
                            <textarea
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder='Masukkan Deskripsi Singkat'
                                required
                                rows={4}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <span>Tautan</span>
                            <input
                                type='text'
                                value={tautan}
                                onChange={(e) => setTautan(e.target.value)}
                                placeholder='Masukkan Tautan (opsional)'
                            // Tautan bisa kosong, jadi tidak perlu required
                            />
                        </div>
                        <button type='submit'>Simpan</button>
                        <p>{msg}</p>
                    </form>
                </div>
            )}

            <div className={styles.tableWrapper}>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul Kegiatan</th>
                            <th>ID Organisasi</th>
                            <th>Tanggal Kegiatan</th>
                            <th>Lokasi</th>
                            <th>Jenis Kegiatan</th>
                            <th>Deskripsi</th>
                            <th>Tautan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {kegiatans.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.judul_kegiatan}</td>
                                <td>{item.id_organisasi}</td>
                                <td>{new Date(item.tanggal_kegiatan).toISOString().split('T')[0]}</td>
                                <td>{item.lokasi}</td>
                                <td>{item.jenis_kegiatan}</td>
                                <td>{item.deskripsi}</td>
                                <td>{item.tautan}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {kegiatans.length === 0 && (
                            <tr>
                                <td colSpan='10'>No Data Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}