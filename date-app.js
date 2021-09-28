// DATE APLLICATION

// şimdiki tarihin gün, ay, yıl yazımı

  var dt = new Date ();
  
  console.log(dt);
  console.log(typeof dt)

  // tarihin içinden seçtiğimiz ögeler

  console.log(dt.getMonth()+1); 
    // js'de aylar sıfırdan başlar +1 asıl ayı göstermek için
  console.log(dt.getDate());
  console.log(dt.getFullYear());

  