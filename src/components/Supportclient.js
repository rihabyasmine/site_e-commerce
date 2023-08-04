import { useState } from 'react'
import React  from 'react'
import {  useLocation } from 'react-router-dom'

const Supportclient = () => {
    const location = useLocation()
    var but1 = location.state 
   
 const element = [
        {
            "id": 1,
            "b": but1
        }
    ]
   

    
    const [but, setbut] = useState(element);
    const [show ,setshow] = useState (false)
    const [show1 ,setshow1] = useState (false)
    const [show2 ,setshow2] = useState (false)
    const Show = () => show ? setshow(false) :  setshow(true)
    const Show1 = () => show1 ? setshow1(false) :  setshow1(true)
    const Show2 = () => show2 ? setshow2(false) :  setshow2(true)

 
const couleur = (val)=> {
        if (val==='c'){
            
            const newState = but.map(obj => {
   
                if (obj.id === 1) {
                  return {...obj, b: "1"};
                }
             // 👇️ otherwise return the object as is
                return obj;
              });
            
              setbut(newState);
       
     
        }
        else if (val==='l'){
     const newState = but.map(obj => {
   
    if (obj.id === 1) {
      return {...obj, b: "2"};
    }
 // 👇️ otherwise return the object as is
    return obj;
  });

  setbut(newState);
           
            }
            else if (val==='r'){
                const newState = but.map(obj => {
              
               if (obj.id === 1) {
                 return {...obj, b: "3"};
               }
            // 👇️ otherwise return the object as is
               return obj;
             });
           
             setbut(newState);
                      
                       }
                       else if (val==='co'){
                        const newState = but.map(obj => {
                      
                       if (obj.id === 1) {
                         return {...obj, b: "4"};
                       }
                    // 👇️ otherwise return the object as is
                       return obj;
                     });
                   
                     setbut(newState);
                              
                               }
                               else if (val==='f'){
                                const newState = but.map(obj => {
                              
                               if (obj.id === 1) {
                                 return {...obj, b: "5"};
                               }
                            // 👇️ otherwise return the object as is
                               return obj;
                             });
                           
                             setbut(newState);
                                      
                                       }
                                       else if (val==='cg'){
                                        const newState = but.map(obj => {
                                      
                                       if (obj.id === 1) {
                                         return {...obj, b: "6"};
                                       }
                                    // 👇️ otherwise return the object as is
                                       return obj;
                                     });
                                   
                                     setbut(newState);
                                              
                                               }
    
       
        }
   return (
        <div className='support-container'>
    
    <div className='support-button'>
    <button onClick={() => couleur('cg')}>CGVs</button>
    <button onClick={() => couleur('c')} >Commande</button>
    <button onClick={() => couleur('co')} >Contactez Nous</button>
    <button onClick={() => couleur('f')} >FAQs</button>
    <button onClick={() => couleur('l')} >Livraison</button>
    <button onClick={() => couleur('r')} >Retour</button>
    </div>
   
  <div>
  {but.map( (id) => (
        
        id.b=== "1" && <div><h2 onClick={Show}>Comment passez commande ? </h2> 
        
    { show ?  <p>Commencez votre e-shopping sur ANSO.dz :

Choisir le ou les modèles que vous souhaitez commander,

Cliquez sur le modèle que vous souhaitez commander,

Après la sélection du modèle, vous devrez sélectionner la couleur (si plusieurs coloris sont proposés) ainsi que la pointure (veillez à consulter le guide des pointures)

Cliquez sur commander afin que le produit se place dans le panier.

Une fois les sélections des produits faites, vous retrouverez tous vos articles dans le panier.

Veillez à consulter nos conditions générales de ventes avant la validation de votre commande.

Il ne vous restera plus qu’à valider votre commande en suivant toutes les étapes requises (remplir le formulaire nécessaire à l’envoi de votre colis) au bon déroulement de la commande.

Important : Veuillez s’il vous plait vérifier toutes les informations personnelles avant validation de votre commande.

Un mail de traitement de votre commande vous sera envoyé, suivi d’un e-mail de confirmation comportant votre facture. Un membre de notre équipe vous contactera par téléphone pour confirmer l’expédition de votre commande.

Bon shopping sur ANSO
        </p> : null}    
        <h2 onClick={Show1}>Je n'arrive pas à ajouter un article dans mon panier</h2>
        {show1 ? <p>Nous savons combien il peut être frustrant de ne pas trouver l’article disponible. Si la mention rupture de stock est affichée, l’article n’est malheureusement plus en stock.

Cependant nous pouvons parfois avoir des réassorts pointures, l’article peut être à nouveau disponible.</p> : null}
<h2 onClick={Show2}>ma commande est-elle confirmée</h2>
{show2 ? <p>Lors de la validation de votre commande, un mail est envoyé à votre adresse électronique indiquée sur le formulaire d’expédition.

Veillez à ce que toutes les informations personnelles soit correctes, nous vous appellerons au numéro mentionné sur votre facture pour confirmer l’expédition de votre colis.

Les commandes non confirmées, sous un délais de 48h, sont automatiquement annulées et les articles remis au stock.</p> : null}
        </div>
         
         
         ))}
            {but.map( (id) => (
         
         id.b=== "2" && <h1>Livraison</h1>
          
          ))}
            {but.map( (id) => (
         
         id.b=== "3" && <h1>Retour</h1>
          
          ))}
             {but.map( (id) => (
         
         id.b=== "4" && <h1>Contactez nous</h1>
          
          ))}
             {but.map( (id) => (
         
         id.b=== "5" && <h1>FAQs</h1>
          
          ))}
                  {but.map( (id) => (
         
         id.b=== "6" && <h1>CGVs</h1>
          
          ))}
  </div>
     
    
       
    
   
    


      


 
        </div>
    )
}
export default Supportclient