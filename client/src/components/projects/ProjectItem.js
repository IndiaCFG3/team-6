import React from 'react';

class ProjectItem extends React.Component {
  UNSAFE_componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }
  handleClick = (e) => {
    if (this.node.contains(e.target)) {
    } else {
      this.props.outsideClick(e);
    }
  };
  render() {
    const { current } = this.props.info;
    return (
      <div className='projectitem' ref={(node) => (this.node = node)}>
        <img
          src={current['image']}
          alt={current['name']}
          style={{ maxWidth: '90vw' }}
        />
        <h3>{current['name']}</h3>
        <ul className='technologies'>
          {current['technologies'].map((tech) => (
            <li className='technologyitem'>
              <i className={tech}></i>
            </li>
          ))}
        </ul>
        <div className='hosting'>
          <a href={current['github']}>
            <i className='devicon-github-plain'></i>
          </a>
          {/* {current['live_demo'].length > 0 ? (
            <a href={current['live-demo']}>
              <i className='fa fa-link'></i>
            </a>
          ) : null} */}
        </div>

        <p>{current['description']}</p>
      </div>
    );
  }
}

export default ProjectItem;
