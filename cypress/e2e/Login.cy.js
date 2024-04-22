describe("test", function () {
    it("qore", () => {
        let token;
        cy.intercept("https://qore-api.enyata.com/api/v1/auth/login/").as("token");

        cy.visit("/");

        cy.get('[data-testid="email"]').type("ifeoluwa@enyata.com");

        cy.get('[data-testid="password"]').type("validPassword1234{enter}");

        cy.wait("@token").then((intercept) => {
            if (
                intercept &&
                intercept.response &&
                intercept.response.body &&
                intercept.response.body.data
            ) {
                console.log("hereiscovery");
                this.token = intercept.response.body.data.verification_token;
            }
        });

        console.log(this.token, "token");

        cy.get('[data-testid="otp_input-0"]').type(this.token,[0]);

        // cy.get('[data-testid="otp_input-1"]')
        // .type(this.token[1])

        // cy.get('[data-testid="otp_input-2"]')
        // .type(this.token[2])

        // cy.get('[data-testid="otp_input-3"]')
        // .type(this.token[3])

        // cy.get('[data-testid="otp_input-4"]')
        // .type(this.token[4])

        // cy.get('[data-testid="otp_input-5"]')
        // .type(this.token[5])

        // cy.wait(5000);

        // cy.find('[data-testid="form"] > .items-center')
        // .click({force: true})
    });
});
