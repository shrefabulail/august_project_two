/// <reference types= "cypress" />



describe('template spec', () => {
  it('passes', () => {
let websites= ["https://global.almosafer.com/ar","https://global.almosafer.com/en"]

let RandomIndex = Math.floor(Math.random()*websites.length)

cy.visit( websites[RandomIndex])

cy.get('.cta__saudi').click()
cy.get('#uncontrolled-tab-example-tab-hotels > .sc-hXhGGG').click();

if (RandomIndex==0) {
  cy.get('[data-testid="AutoCompleteInput"]').type("دبي")


}else if (RandomIndex==1){cy.get('[data-testid="AutoCompleteInput"]').type("dubai")
}


  });
})