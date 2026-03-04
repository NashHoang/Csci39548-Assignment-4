import { useState } from "react"
const EditDescription = ({ index, description, onEdit, onCancel }) => {
    const [newDescription, setNewDescription] = useState(description)
    const handleSubmit = (e) => {
        e.preventDefault()
        onEdit(index, newDescription)
    }
    return (
        <form onSubmit={handleSubmit}>
        <input 
            id={`edit-description-${index}`}
            name='description' 
            placeholder='Enter description'
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Escape') onCancel()
            }}
        />
    </form>
    )
}
export default EditDescription