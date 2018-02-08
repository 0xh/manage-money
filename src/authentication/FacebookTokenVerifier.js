const Verifier = require('@feathersjs/authentication-oauth2').Verifier
const uuid = require("uuid/v4")

class FacebookVerifier extends Verifier {
  _createEntity(data) {
    const options = this.options;
    const name = options.name;
    const email = data.profile.emails[0].value
    const picture = data.profile.photos[0].value

    const entity = {
      [options.idField]: data.profile.id,
      [name]: name,
      email,
      name: data.profile.displayName,
      picture,
      password: uuid(),
    };

    return this.service.create(entity, { oauth: { provider: name } });
  }
}

module.exports = FacebookVerifier