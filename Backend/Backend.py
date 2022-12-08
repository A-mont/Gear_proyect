
# -*- coding: utf-8 -*-

from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
 

CORS(app)


@app.route("/")
def home():
    return ("<h1>Hola mundo web3 </h1>")

@app.route("/productos")
def productos():
    
    
    return ("""<ol>          
            <p>productos</p>
            <li> Carne</li>
            <li> Huevos</li>
            </ol>""")
            
            

#Ruta dinamica
@app.route("/<nombre>")

def dinamic_route(nombre):
    
  
    return "<h1>Hola {} te saludo de la ruta dinamica </h1>".format(nombre)



@app.route("/<num1>/<num2>")

def sum(num1,num2):
    
    resultado = int(num1) + int(num2)
    
    return("<h1> La suma de {} y {} es: {}</h2>".format(num1,num2,resultado))


@app.route("/button",methods = ['POST'])
def button():
     
     print("DATA RECIBIDA")
     print(request.json)
     
     
     return {"Recibido": True}
           





if __name__ == "__main__":
    
    
    app.run()
    