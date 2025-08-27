const {app} = require('./index');
const {login} = require('./controllers/loginControllers');
const {register} = require('./controllers/registerController');
const {logout} = require('./controllers/logoutController');
const {sendOtp} = require('./controllers/sendOtpController');
const {newPassword} = require('./controllers/newPasswordController');
const { getAllProducts, addProduct, getProductById, deleteProduct, updateProduct } = require("./controllers/productsController");


app.post('/login', login)

app.post('/register', register)

app.get('/logout', logout)

app.get('/send-otp', sendOtp)

app.post('/new-password', newPassword)

app.get("/products", getAllProducts)

app.post("/add-product", addProduct)

app.get("/products/:id", getProductById)

app.delete("/delete-product/:id", deleteProduct)

app.put("/edit-product/:id", updateProduct)





