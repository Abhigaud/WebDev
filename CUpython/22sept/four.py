# if statements

def if_example():
    a = 5
    if(a<10):
        print("5 is less than 10")
    print("statement after if statement")

if_example()

# if else
def if_else_example():
    a = 15
    if(a>=18):
        print("eligible")
    else:
        print("not eligible")
    print("statement after if else statement")

if_else_example()

# if elif
def if_elif_example():
    a = 27
    if a>=60:
        print("senior discount")
    elif 18<= a <60:
        print('no discount')
    else:
        print("junior discount")
    print("statement after if elif statement")

if_elif_example()

