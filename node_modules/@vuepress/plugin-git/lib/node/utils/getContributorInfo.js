const toArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
export const getContributorInfo = (contributor, infos = []) => infos.find(({ username, alias, email, emailAlias }) => username === contributor.name ||
    toArray(alias).includes(contributor.name) ||
    (contributor.email &&
        (contributor.email === email ||
            toArray(emailAlias).includes(contributor.email)))) ?? null;
