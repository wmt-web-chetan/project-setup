import { Collapse } from "antd"
import FAQItem from "../Faqitem/index"

const { Panel } = Collapse

const FAQList = ({ faqs, onEdit, onDelete }) => {
    return (
      <Collapse className="bg-white shadow-md rounded-lg">
        {faqs.map((faq) => (
          <Panel
            key={faq.id}
            header={
              <div className="flex justify-between items-center w-full pr-8">
                <span className="text-lg font-medium text-gray-800">{faq.title}</span>
                <span className="text-sm text-gray-500">
                  <span
                    className={`px-2 py-1 rounded-full ${faq.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {faq.status}
                  </span>
                  <span className="ml-2">Last updated: {faq.lastUpdated}</span>
                </span>
              </div>
            }
            extra={<FAQItem faq={faq} onEdit={onEdit} onDelete={onDelete} />}
          >
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2">
                <strong className="text-gray-700">Question:</strong> <span className="text-gray-600">{faq.question}</span>
              </p>
              <p>
                <strong className="text-gray-700">Answer:</strong> <span className="text-gray-600">{faq.answer}</span>
              </p>
            </div>
          </Panel>
        ))}
      </Collapse>
    )
  }
  
  export default FAQList