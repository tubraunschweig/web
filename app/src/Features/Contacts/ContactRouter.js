// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const AuthenticationController = require('../Authentication/AuthenticationController')
const ContactController = require('./ContactController')

module.exports = {
  apply(webRouter, apiRouter) {
    return webRouter.get(
      '/user/contacts',
      AuthenticationController.requireLogin(),
      ContactController.getContacts
    )
  }
}
