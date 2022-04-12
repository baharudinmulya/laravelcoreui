<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kategori;
use App\Models\Pesanan;
use Carbon\Carbon;

class Produk extends Model
{
    use HasFactory;
    protected $table ='produk';
    protected $fillable = [
        'kategori_id'  , 'deskripsi' , 'harga', 'status' , 'berat' , 'foto_produk' ,'nama_produk' , 'created_at', 'updated_at'
    ];

    public function Kategori(){
        return $this->hasOne(Kategori::class);
    }

    public function Pesanan(){
        return $this->belongsTo(Pesanan::class);
    }

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
        'deleted_at' => 'datetime:Y-m-d h:i:s'
     ];
}
