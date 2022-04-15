<?php

namespace App\Imports;

use App\Models\Produk;
use Maatwebsite\Excel\Concerns\ToModel;

class ProdukImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Produk([
            'kategori_id'     => $row[0],
            'nama_produk'     => $row[1],
            'deskripsi'       => $row[2],
            'harga'           => $row[3],
            'status'          => $row[4],
            'berat'           => $row[5],
        ]);
    }
}
