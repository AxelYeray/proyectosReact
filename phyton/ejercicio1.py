import math

"""Tendremos un numero entero N y lo que debemos mostrar es el cuadrado de todos
 los numeros antes del N numero"""


# Aqui le pedimos al usuario que ingrese un numero entero
if __name__ == "__main__":
    n = int(input("Ingrese un numero: "))

i = 0
while i < n:
    print(i**2)
    i += 1
