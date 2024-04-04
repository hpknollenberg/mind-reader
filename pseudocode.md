Use a Bootstrap Carousel

## First Page
    1Text: "I can read your mind"
    2
    3Button: "Go" - Move to next slide.

## Second Page
    1Text: "Pick a number from 01-99"
    2Button: "Next" - Move to next slide.
    2Text: "when you have your number click next"
    3Button: Go back to first slide.

## Third Page
    1Text: "Add both digits together to get a new number"
    2Button: "Next" - Move to next slide.
    2Text: "Ex: 14 is 1+4=5 ... click next to proceed" 
    3Button: Go back to first slide.

## Fourth Page
    1Text: "Subtract your new number from the original number"
    2Button: "Next" - Move to next slide.
    2Text: "Ex: 14-5=9 ... click next to proceed"
    3Button: Go back to first slide

## Fifth Page
    1Text: List -- Number:Symbol...
        JS: Generate Array Number 01-99: Random Symbol
            random 9 symbol: (!@#$%^&*?~)
            For 01-99
                if x%9=0
                    push "#: random 9 symbol"
                else
                    random symbol (!@#$%^&*?~)
                    push "#: random symbol"
            end for
            display array
    2Button: "Reveal" - Move to next slide.
    2Text: "Find your new number. ... Note the symbol beside the number"
    3Button: Go back to first slide

## Sixth Page
    1Text: Symbol ...
        JS: display random 9 symbol 
    2Text: "Your symbol is:" 
        JS: display random 9 symbol
    3Button: Go back to first slide




## Reload maintain page
when button pressed to move to next slide, store slide number in local storage
if refresh, get slide number and change class name to active