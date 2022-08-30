# todo

add files upload logic
add files actual content
replace endpoints with actual ones
replace some window.location.href with router redirects
remove any (add types)
cleanup ui
make button loading cleaner
add home ui
better error messages?

---

endpoints:
/register - POST - {username, email, password} - {token, userId}
/login - POST - {email, password} - {token, userId}
/users/:id - GET - headers: {token} - {...}
/users/:id - PUT - headers: {token} - {username, password} - {...}
/files - GET - headers: {token} - [{id, name, size, uploader, createdAt}]
/files - POST - headers: {token} - multipart - [{file}] - {...}
