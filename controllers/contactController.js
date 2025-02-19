const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel")

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts)
});

const createContacts = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contacts = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })
    res.status(201).json({contacts})
})

const getContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!")
    }
    res.status(200).json(contact)
})

const updateContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!")
    }
    if(contact.user_id.toString() !== req.user,id){
        res.status(403);
        throw new Error("User don't have permissions to update this contact!")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedContact)
})

const deleteContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found!")
    }
    if(contact.user_id.toString() !== req.user,id){
        res.status(403);
        throw new Error("User don't have permissions to update this contact!")
    }
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Contact deleted!" })
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting contact");
    }
})

module.exports = {
    getContacts,
    getContact,
    createContacts,
    updateContact,
    deleteContact
}