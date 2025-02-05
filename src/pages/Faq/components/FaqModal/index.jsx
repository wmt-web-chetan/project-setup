import { useState, useEffect } from "react"
import { Modal, Input, Select, Button } from "antd"

const { TextArea } = Input
const { Option } = Select

const FAQModal = ({ visible, mode, faq, onCancel, onSave }) => {
  const [currentFaq, setCurrentFaq] = useState(faq)

  useEffect(() => {
    setCurrentFaq(faq)
  }, [faq])

  const handleSave = (status) => {
    onSave(currentFaq, status)
  }

  return (
    <Modal
      title={
        <h2 className="text-2xl font-semibold text-gray-800">{mode === "create" ? "Create New FAQ" : "Edit FAQ"}</h2>
      }
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel} className="mr-2">
          Cancel
        </Button>,
        mode === "create" && (
          <Button
            key="draft"
            onClick={() => handleSave("Draft")}
            className="mr-2 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white"
          >
            Save as Draft
          </Button>
        ),
        <Button
          key="submit"
          type="primary"
          onClick={() => handleSave("Published")}
          className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
        >
          {mode === "create" ? "Publish" : "Save Changes"}
        </Button>,
      ]}
      className="w-full max-w-2xl"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            FAQ Title
          </label>
          <Input
            id="title"
            placeholder="Enter FAQ title"
            value={currentFaq.title || ""}
            onChange={(e) => setCurrentFaq({ ...currentFaq, title: e.target.value })}
            className="w-full"
            size="large"
          />
        </div>
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
            Question
          </label>
          <TextArea
            id="question"
            placeholder="Enter the question"
            value={currentFaq.question || ""}
            onChange={(e) => setCurrentFaq({ ...currentFaq, question: e.target.value })}
            rows={4}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
            Answer
          </label>
          <TextArea
            id="answer"
            placeholder="Enter the answer"
            value={currentFaq.answer || ""}
            onChange={(e) => setCurrentFaq({ ...currentFaq, answer: e.target.value })}
            rows={6}
            className="w-full"
          />
        </div>
        {mode === "edit" && (
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <Select
              id="status"
              value={currentFaq.status}
              onChange={(value) => setCurrentFaq({ ...currentFaq, status: value })}
              className="w-full"
              size="large"
            >
              <Option value="Draft">Draft</Option>
              <Option value="Published">Published</Option>
            </Select>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default FAQModal

