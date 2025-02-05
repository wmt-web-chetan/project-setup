import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

const FAQItem = ({ faq, onEdit, onDelete }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex space-x-2">
      <EditOutlined
        className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-200"
        onClick={() => onEdit(faq)}
      />
      <DeleteOutlined
        className="text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-200"
        onClick={() => onDelete(faq.id)}
      />
    </div>
  )
}

export default FAQItem

