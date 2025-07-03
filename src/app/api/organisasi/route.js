import prisma from '@/lib/prisma';
export async function GET() {
    const data = await prisma.organisasi.findMany({
        orderBy: { id: 'asc' },
    });
    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request) {
    const { nama_organisasi, ketua_organisasi, no_kontak, tahun_dibentuk, pembina } =
        await request.json();
    if (!nama_organisasi || !ketua_organisasi || !no_kontak || !tahun_dibentuk || !pembina === null) {
        return new Response(JSON.stringify({ error: 'Semua field wajib diisi' }), {
            status: 400,
        });
    }
    const organisasi = await prisma.organisasi.create({
        data: {
            nama_organisasi,
            ketua_organisasi,
            no_kontak,
            tahun_dibentuk: new Date(tahun_dibentuk),
            pembina,
        },
    });
    return new Response(JSON.stringify(organisasi), { status: 201 });
}

export async function PUT(request) {
    const { id, nama_organisasi, ketua_organisasi, no_kontak, tahun_dibentuk, pembina } =
        await request.json();
    if (!id || !nama_organisasi || !ketua_organisasi || !no_kontak || !tahun_dibentuk || !pembina === null)
        return Response.json(
            { error: 'Field kosong' },
            {
                status: 400,
            }
        );
    const organisasi = await prisma.organisasi.update({
        where: { id },
        data: {
            nama_organisasi,
            ketua_organisasi,
            no_kontak,
            tahun_dibentuk: new Date(tahun_dibentuk),
            pembina
        },
    });
    return Response.json(organisasi);
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

        await prisma.organisasi.delete({ where: { id } });

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
