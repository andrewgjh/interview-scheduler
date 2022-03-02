describe("manipulating interview form", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");
    cy.contains("Monday");
  });
  it.skip("book interviewing", () => {
    cy.get("[alt=Add]").first().click();
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones", {
      delay: 100,
    });
    cy.get("[alt='Sylvia Palmer']").click();
    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it.skip("editing an interview", () => {
    cy.get("[alt=Edit]").click({ force: true });
    cy.get("[alt='Tori Malcolm']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("delete an interview", () => {
    cy.get("[alt=Delete]").click({ force: true });
    cy.contains("Confirm").click();
    cy.contains("Deleting");
    cy.contains("Deleting").should("not.exist");
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
