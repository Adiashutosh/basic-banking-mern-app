const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    from: {
        type: String,
        max: 40
    },
    to: {
        type: String,
        max: 40
    },
    amount: {
        type: Number,
        required: true,
    }
},
{timestamps: true}
)

module.exports = mongoose.model('Transaction',TransactionSchema)