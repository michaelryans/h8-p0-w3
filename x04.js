var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (input) {

  // 1 . SPLICE INPUT //
  input.splice(2,1, "Provinsi Bandar Lampung");
  input.push("Pria")
  input.push("SMA Internasional Metro")
  //input === ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

  var tanggal = input[3]
  var tanggalFormatBaru = '' //untuk output tanggal akhir

  // 2&3. SPLICE DAN SORT TANGGAL //
  //tanggalArray --> tanggal angka yang sudah dipisah '/'
  //tanggalSplit, bulanSplit, tahunSplit --> split tanggal,bulan,tahun dari var tanggalArray
  var tanggalArray = tanggal.split("/") // tanggalArray = ['dd','mm', 'yyyy']
  var tanggalSplit = tanggalArray[0] // 'dd'
  var bulanSplit = tanggalArray[1] // 'mm'
  var tahunSplit= tanggalArray[2] // 'yyyy'

  tanggalFormatBaru = tanggalSplit

  var bulanAlfabet ='';

  //formatBulan() untuk mengubah bulan ('mm') menjadi alfabet
  function formatBulan() {
    switch(bulanSplit){
      case '01': bulanAlfabet = 'Januari '; break;
      case '02': bulanAlfabet = 'Februari '; break;
      case '03': bulanAlfabet = 'Maret ' ;break;
      case '04': bulanAlfabet = 'April '; break;
      case '05': bulanAlfabet = 'Mei '; break;
      case '06': bulanAlfabet = 'Juni '; break;
      case '07': bulanAlfabet = 'Juli '; break;
      case '08': bulanAlfabet = 'Agustus '; break;
      case '09': bulanAlfabet = 'September '; break;
      case '10': bulanAlfabet = 'Oktober '; break;
      case '11': bulanAlfabet = 'November '; break;
      default: bulanAlfabet = 'Desember '; break;
    }
    return bulanAlfabet;
  }

  function sortTanggal() {
    // var points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return b-a});
    tanggalArrayNumber = [Number(tanggalSplit), Number(bulanSplit), Number(tahunSplit)]
    var tanggalSorted =tanggalArrayNumber.sort(function(value1, value2) { return value1 < value2 });
    return tanggalSorted;
  }

//4. ADDING '-' to tanggal
  var tanggalStrip = tanggalArray.join('-')


//5. LIMIT 15 CHARACTER for NAME STRING
  var nama = input[1]

  if (nama.length >= 15) {
    nama = nama.slice(0,14)
  } else {
    nama = nama
  }

  console.log(input);
  console.log (formatBulan());
  console.log(sortTanggal());
  console.log(tanggalStrip);
  console.log(nama)
}



dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */