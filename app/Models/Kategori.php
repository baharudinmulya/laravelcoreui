<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produk;

class Kategori extends Model
{
    use HasFactory;
    protected $table ='kategori';
    protected $fillable = [
        'nama_kategori' , 'jenis_kategori'
    ];
    protected $primaryKey = 'id';

    public function produk()
    {
        return $this->belongsTo(Produk::class);
    }
}
