"""Programa que pide un numero y devuelve sus numeros anteriores concatenados"""
n = int(input("Ingrese un numero: "))

p = ""
i = 1


while i <= n:
    p = p + str(i)
    print(p)
    i += 1
