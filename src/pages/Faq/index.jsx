import { useState } from "react"
import { Button, message } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import FAQList from "./components/FaqList"
import FAQModal from "./components/FaqModal"

const FAQManagement = () => {
    const [faqs, setFaqs] = useState([
      {
        id: 1,
        title: "How to use this app?",
        question: "How do I use this app?",
        answer: "Follow the on-screen instructions.",
        status: "Published",
        lastUpdated: "2023-05-20",
      },
      {
        id: 2,
        title: "Pricing plans",
        question: "What are the pricing plans?",
        answer: "We offer various pricing plans.",
        status: "Draft",
        lastUpdated: "2023-05-19",
      },
    ])
  
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalMode, setModalMode] = useState("create")
    const [currentFaq, setCurrentFaq] = useState({})
  
    const showModal = (mode, faq = {}) => {
      setModalMode(mode)
      setCurrentFaq(faq)
      setIsModalVisible(true)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
      setCurrentFaq({})
    }
  
    const handleSave = (faq, status = "Draft") => {
      if (modalMode === "create") {
        const newFaq = {
          ...faq,
          id: faqs.length + 1,
          status,
          lastUpdated: new Date().toISOString().split("T")[0],
        }
        setFaqs([...faqs, newFaq])
      } else {
        const updatedFaqs = faqs.map((f) =>
          f.id === faq.id ? { ...f, ...faq, lastUpdated: new Date().toISOString().split("T")[0] } : f,
        )
        setFaqs(updatedFaqs)
      }
      setIsModalVisible(false)
      setCurrentFaq({})
      message.success(`FAQ ${modalMode === "create" ? "created" : "updated"} successfully`)
    }
  
    const handleDelete = (id) => {
      const updatedFaqs = faqs.filter((faq) => faq.id !== id)
      setFaqs(updatedFaqs)
      message.success("FAQ deleted successfully")
    }
  
    return (
      <div className="p-6  ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">FAQ Management</h1>
        <div className="flex justify-end">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal("create")}
          className="mb-6 "
          size="large"
        >
          Create New FAQ
        </Button>
        </div>
  
        <FAQList faqs={faqs} onEdit={(faq) => showModal("edit", faq)} onDelete={handleDelete} />
  
        <FAQModal
          visible={isModalVisible}
          mode={modalMode}
          faq={currentFaq}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      </div>
    )
  }
  
  export default FAQManagement
