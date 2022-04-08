<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kategori;
use App\Models\Pesanan;

class Produk extends Model
{
    use HasFactory;
    protected $table ='produk';
    protected $fillable = [
        'kategori_id'  , 'deskripsi' , 'harga', 'status' , 'berat' , 'foto_produk' ,'nama_produk'
    ];

    public function Kategori(){
        return $this->belongsTo(Kategori::class);
    }

    public function Pesanan(){
        return $this->belongsTo(Pesanan::class);
    }
}
