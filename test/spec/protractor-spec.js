"use strict";



// spec.js
describe('Protractor Demo App', function() {




  it('Prenom vide', function() {
    browser.get('http://localhost:9000/#/register');

    element(by.model('user.nom')).sendKeys("moi");
    element(by.id('inscription')).click();
    expect(element(by.model('user.nom') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.prenom') ).getAttribute('class')).toMatch('ng-invalid');

  });


    it('Valide', function() {
    browser.get('http://localhost:9000/#/register');

    element(by.model('user.nom')).sendKeys("mon nom");
    element(by.model('user.prenom')).sendKeys("mon prenom");
    element(by.model('user.email')).sendKeys("toto@email.com");
    element(by.model('user.password')).sendKeys("toto");
    element(by.model('passwordConfirm')).sendKeys("toto");
    element(by.id('inscription')).click();

    expect(element(by.model('user.nom') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.prenom') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.email') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.password') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('passwordConfirm') ).getAttribute('class')).toMatch('ng-valid');

  });

   it('Mot de passe invalide', function() {
    browser.get('http://localhost:9000/#/register');

    element(by.model('user.nom')).sendKeys("mon nom");
    element(by.model('user.prenom')).sendKeys("mon prenom");
    element(by.model('user.email')).sendKeys("toto@email.com");
    element(by.model('user.password')).sendKeys("toto");
    element(by.model('passwordConfirm')).sendKeys("toto2");
    element(by.id('inscription')).click();

    expect(element(by.model('user.nom') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.prenom') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.email') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('user.password') ).getAttribute('class')).toMatch('ng-valid');
    expect(element(by.model('passwordConfirm') ).getAttribute('class')).toMatch('ng-invalid');

  });
});
