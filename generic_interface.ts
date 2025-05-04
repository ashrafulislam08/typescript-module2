{

  // generic interface

  interface Developer<T> {
    name: string,
    computer: {
        brand: string;
        model: string;
        release: number;
    };
    smartwatch: T
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<EmilabWatch> ={
    name: "Ashraful",
    computer: {
        brand: "Dell",
        model: "X=2ssir",
        release: 2028
    }, 
    smartwatch: {
        brand: "Emilar",
        model: "ky6",
        display: 'OLED'
    }}


    interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        heartTrack: boolean;
        sleepTrack: boolean
      }
  const richDeveloper: Developer<AppleWatch> ={
    name: "Rich Dev",
    computer: {
        brand: "HP",
        model: "X=2ssir",
        release: 2028
    }, 
    smartwatch: {
        brand: "Apple Watch",
        model: "something",
        display: 'OLED',
        heartTrack: true,
        sleepTrack: true,
    }}

}