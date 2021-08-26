import time
def clearscreen():
    print('\n' * 50)
hours = 0
minutes = 0
seconds = 0
miliseconds = 0
input('press enter to start stopwatch')
while True:
    if miliseconds == 100:
        miliseconds = 0
        seconds += 1
    if seconds == 60:
        seconds = 0
        minutes += 1
    if minutes == 60:
        minutes = 60
        hours += 1
    print(hours,':',minutes,':',seconds,':', miliseconds)
    time.sleep(0.0089)
    clearscreen()
    miliseconds += 1