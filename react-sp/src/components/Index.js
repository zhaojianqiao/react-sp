import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import {Link} from 'react-router-dom'
import {getVisibleProducts} from '../reduxs/count'

const Index = ({count}) => (
<div className="container fl main-index">
  <QueueAnim>
    {count.map(item =>
        <div id={item.id} className="product-list fl" key={'a'+item.id}>
          <img src={'../images/'+item.src} alt=""/>
          <p>{item.price}</p>
          <Link to={'/detail/'+item.id}>{item.name}</Link>
        </div>
    )}
  </QueueAnim>
</div>
)

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count)
})

Index.PropTypes = {
  count: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mashu: PropTypes.array.isRequired
  })).isRequired
}

export default connect(
  mapStateToProps
)(Index)
