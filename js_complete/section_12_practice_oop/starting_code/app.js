class DOMHelper {
  static moveElement(elemId, newRoot) {
    const elem = document.getElementById(elemId);
    const newDest = document.querySelector(newRoot);
    newDest.append(elem);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    this.hostElement = hostElementId
      ? document.getElementById(hostElementId)
      : document.body;
    this.insertBefore = insertBefore;
  }

  detach() {
    this.element.remove();
  }

  attach() {
    // this.hostElement.append(this.element);
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeHandler) {
    super();
    this.closeHandler = closeHandler;
    this.create();
  }

  remove = () => {
    this.detach();
    this.closeHandler();
    // this.elem.parentElement.removeChild(this.elem);
  };

  create() {
    this.element = document.createElement('div');
    this.element.className = 'card';
    this.element.textContent = 'dummy';
    this.element.onclick = this.remove;
    this.attach();
  }
}

class ProjectItem {
  hasActiveTooltip = false;
  constructor(id, type, switchProjectFunc) {
    this.id = id;
    this.type = type;
    this.switchProjectHandler = switchProjectFunc;
    this._projElem = document.getElementById(this.id);
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {
    const moreInfoBtn = this._projElem.querySelector('button:first-of-type');
    moreInfoBtn.onclick = () => {
      if (!this.hasActiveTooltip) {
        new Tooltip(() => (this.hasActiveTooltip = false));
        this.hasActiveTooltip = true;
      }
    };
  }

  connectSwitchButton() {
    const switchBtn = this._projElem.querySelector('button:last-of-type');
    switchBtn.textContent = this.type === 'active' ? 'Finish' : 'Activate';
    switchBtn.onclick = () => {
      this.switchProjectHandler(this.id);
    };
  }

  update(updatedSwitchHandler, type) {
    this.switchProjectHandler = updatedSwitchHandler;
    this.type = type;
    this._projElem = document.getElementById(this.id);
    this.connectSwitchButton();
  }
}

class ProjectList {
  constructor(type) {
    this.type = type;
    this._selector = `#${this.type}-projects`;
    this.projects = Array.from(document.querySelectorAll(`${this._selector} li`)).map(
      (item) => new ProjectItem(item.id, this.type, this.switchProject)
    );
  }

  setSwitchHandler(switchHandlerFunc) {
    this.switchHandler = switchHandlerFunc;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `${this._selector} ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject = (projectId) => {
    // this.projIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.Id !== projectId);
  };
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandler((project) =>
      finishedProjectList.addProject(project)
    );

    finishedProjectList.setSwitchHandler((project) =>
      activeProjectList.addProject(project)
    );
  }
}

App.init();
