<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produk;
use App\Models\Pelanggan;

class Pesanan extends Model
{
    use HasFactory;

    protected $table = 'pesanan';
    protected $fillable = [
        'produk_id','pelanggan_id','invoice_id','qty','total_harga','status','date'
    ];
    protected $primaryKey = 'id';

    public function Produk(){
        return $this->hasMany(Produk::class);
    }

    public function Pelanggan(){
        return $this->belongsTo(Pelanggan::class);
    }
}
