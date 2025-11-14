export async function CharReceive(characters:any,setCharacters:any,setFinal:any){


  


  if (!characters || characters.length !== 5) return;
  // กำหนด weight ของแต่ละตัว
  const weights = [0.3712, 0.216, 0.18, 0.144, 0.0888];
  // สุ่มเลข r 0-1
  const r = Math.random();
  let cumulative = 0;
  for (let i = 0; i < characters.length; i++) {
    cumulative += weights[i];
    if (r <= cumulative) {
      setFinal(characters[i]); 
      setCharacters([])
      return;
    }
  }
  setFinal(characters[characters.length - 1]);
  setCharacters([])


}
