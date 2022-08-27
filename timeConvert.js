const timein24hrs = (hh, mm, ss, pmoram) => {
    if (hh === 12 && mm === 00 && ss === 00 && pmoram === "AM" ) {
      return "00" + ":" + "00" + ":" + "00"; 
    } else 
    if (hh === 12 && mm === 00 && ss === 00 && pmoram === "PM" ) {
      return "12" + ":" + "00" + ":" + "00"; 
    } else 
    if (hh >= 1 && hh < 12 && pmoram === "PM") {
      return (hh + 12) + ":" + mm + ":" + ss; 
    } else
    if (hh >= 12 && pmoram === "AM") {
      return (hh - 12) + ":" + mm + ":" + ss;
    }
      return hh + ":" + mm + ":" + ss; 
  };
  
  console.log(timein24hrs(12,00,00,"PM"));
  console.log(timein24hrs(12,00,00,"AM"));
  console.log(timein24hrs(12,45,00,"AM"));
  console.log(timein24hrs(12,40,00,"PM"));
  console.log(timein24hrs(01,00,00,"AM"));
  console.log(timein24hrs(01,01,06,"PM"));