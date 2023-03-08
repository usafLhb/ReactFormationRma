import React ,{useState}from 'react'

function ProduitChild(props) {
    
  return (
    <div>
    <p>Nom: {props.nom}</p>
    <p>qte: {props.qte}</p>
    <p>prix: {props.prix}</p>
  </div>
  )
}

export default ProduitChild
