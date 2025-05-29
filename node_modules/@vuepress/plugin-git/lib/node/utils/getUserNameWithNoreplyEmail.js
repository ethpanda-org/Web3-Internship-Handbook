export const getUserNameWithNoreplyEmail = (email) => email.endsWith('@users.noreply.github.com')
    ? email.replace('@users.noreply.github.com', '').split('+')[1]
    : null;
