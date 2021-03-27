
import './App.css';
import Prof from './Profile/Prof';

const HandelName=(a)=>{
  alert(a);

}


function App() {
  
  return  (
    


    <div class="row no-gutters">
  <div className="cont"   > 
 
      <h1 className="titre">Profile</h1> 
     <Prof FullName="Diego Maradona" 
     Bio=" né le 30 octobre 1960 à Lanús et mort le 25 novembre 2020 à Tigre, est un footballeur international argentin devenu entraîneur " HandelName={HandelName}
      profession="footballeur "   HandelName={HandelName} > <img src="/maradona.jpg" alt="react" ></img>  </Prof>
               
          </div>
  <div class="col-6 col-md-4"></div>
</div>
  
  
  );
    };


    
  


export default App;
