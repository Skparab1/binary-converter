# binary converter
while True:
    try:

        print('\nUsage:')
        print('b - convert to binary')
        print('d - convert to decimal')
        inp = input(' > ')

        inp = inp.replace(' ','')

        if inp == '' or inp == ' ':
            blank = ''

        elif 'b' in inp:
            inp = inp.replace('b','')
            index = -1
            bit = 1
            binary = ''
            inp = int(inp)
            sum = 0
            binsum = inp

            while bit <= inp:
                bit = bit*2
            
            bit = int(bit/2)

            #print('bit ',bit)

            while bit >= 1:
                binsum = binsum - bit
                binary = binary + '1'

                while bit > binsum:
                    bit = bit/2

                    if bit <= binsum or bit < 1:
                        break
                    else:
                       binary = binary + '0' 

            print(binary)

        elif 'd' in inp:
            inp = inp.replace('d','') 
            index = -1
            bit = 1
            decimal = 0

            while True:
                try:
                    element = inp[index]
                    if element == '1':
                        decimal += bit
                    
                    bit = bit * 2
                    index -= 1
                except:
                    break
            
            print(decimal)

    except Exception as e:
        print(e)
        print('Sorry, something went wrong. Please try again')
