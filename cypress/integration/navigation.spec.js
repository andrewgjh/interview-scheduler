describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should visit root", () => {});
  it("should navigate to Tuesday", () => {
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});

// Visits the root of our web server
// Changes the day to "Tuesday"
// Clicks on the second "Add" button in the schedule
// Enters their name
// Chooses an interviewer
// Clicks the save button
// Sees the booked appointment
// Clicks the edit button
// Changes the name and interviewer
// Clicks the save button
// Sees the edit to the appointment
// Clicks the delete button
// Clicks the confirm button
// Sees that the appointment slot is empty
