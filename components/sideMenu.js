
import Modal from './modal'


const SideMenu = (props) => {

    const { categories } = props

    return (
        <div>
            <Modal />
            <h1 className="my-4">{props.shopName}</h1>
            <div className="list-group">
                {categories.map((category, index) => (
                    <a key={index}
                        href="#"
                        className="list-group-item">{category.name}</a>
                ))}

            </div>
        </div>
    )
}
export default SideMenu