<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pesanan;

class Pelanggan extends Model
{
    use HasFactory;
    protected $table ='pelanggan';
    protected $fillable = [
        'name','alamat'
    ];
    protected $primaryKey = 'id';

    public function Pesanan(){
        return $this->hasMany(Pesanan::class);
    }
}
