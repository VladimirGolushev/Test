 const modal = $.modal({
     title: 'Vladimir Modal',
     closable: true,
     content: `
     <p>Lorem ipsum dolor sit.</p>     
     <p>Lorem ipsum dolor sit.</p>
    `,
    width: '300px',
    footerButtons: [
        {text: 'Ok', type: 'primary', headler(){
            console.log('Primary btn click')
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', headler(){
            console.log('Danger btn click')
            modal.close()
        }},       
    ] 
 })