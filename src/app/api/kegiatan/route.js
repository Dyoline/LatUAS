import prisma from '@/lib/prisma';
export async function GET() {
    const data = await prisma.kegiatan.findMany({
        orderBy: { id: 'asc' },
    });
    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
    const { judul_kegiatan, id_organisasi, tanggal_kegiatan, lokasi, jenis_kegiatan, deskripsi, tautan } =
        await request.json();
    if (!judul_kegiatan || !id_organisasi || !tanggal_kegiatan || !lokasi || !jenis_kegiatan || !deskripsi === null) {
        return new Response(JSON.stringify({ error: 'Semua field wajib diisi' }), {
            status: 400,
        });
    }
    const kegiatan = await prisma.kegiatan.create({
        data: {
            judul_kegiatan,
            id_organisasi,
            tanggal_kegiatan: new Date(tanggal_kegiatan),
            lokasi,
            jenis_kegiatan,
            deskripsi,
            tautan: tautan || '', // Tautan bisa kosong
        },
    });
    return new Response(JSON.stringify(kegiatan), { status: 201 });
}

export async function PUT(request) {
    const { id, judul_kegiatan, id_organisasi, tanggal_kegiatan, lokasi, jenis_kegiatan, deskripsi, tautan } =
        await request.json();
    if (!id || !judul_kegiatan || !id_organisasi || !tanggal_kegiatan || !lokasi || !jenis_kegiatan || !deskripsi === null)
        return Response.json(
            { error: 'Field kosong' },
            {
                status: 400,
            }
        );
    const kegiatan = await prisma.kegiatan.update({
        where: { id },
        data: {
            judul_kegiatan,
            id_organisasi,
            tanggal_kegiatan: new Date(tanggal_kegiatan),
            lokasi,
            jenis_kegiatan,
            deskripsi,
            tautan,
        },

    });
    return Response.json(kegiatan);
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: 'ID tidak ditemukan' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        await prisma.kegiatan.delete({ where: { id } });

        return new Response(JSON.stringify({ message: 'Berhasil dihapus' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('DELETE Error:', error);
        return new Response(JSON.stringify({ error: 'Server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
