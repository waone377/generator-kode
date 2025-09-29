# Contoh C++ Hello World

Proyek sederhana ini adalah implementasi dasar dari program "Hello, World!" menggunakan bahasa pemrograman C++.

## Prasyarat

Anda memerlukan kompiler C++ yang terinstal di sistem Anda, seperti `g++`.

## Cara Kompilasi dan Menjalankan

Ada dua cara untuk mengompilasi dan menjalankan program ini:

### 1. Menggunakan Makefile (Direkomendasikan)

Cukup jalankan perintah `make` di terminal dari direktori root proyek:

```bash
# Kompilasi program
make

# Menjalankan program
./hello_world
```

Output yang diharapkan:
```
Hello, World!
```

Untuk membersihkan file hasil kompilasi, jalankan:
```bash
make clean
```

### 2. Manual Menggunakan g++

Anda juga bisa mengompilasi file `main.cpp` secara langsung:

```bash
# Kompilasi file main.cpp dan buat executable bernama 'hello_world'
g++ main.cpp -o hello_world

# Menjalankan program
./hello_world
```

Output yang diharapkan:
```
Hello, World!
```