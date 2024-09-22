import {makeAutoObservable} from "mobx";

class EnterpriseStore {
    profile = {}
    practices = []
    request = {}
    universityRequest = {}
    universityRequests = []
    myRequests = []
    newResponses = []
    checkingResponses = []
    agreedResponses = []
    isLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    async fetchStudent() {
        try {
            this.isLoading = true
            this.profile = await {
                name: 'Миргалямова Эмма Аликовна',
                email: 'emma.mir@mail.ru',
                phone: '89123655263',
                sex: 'Женский',
                university: 'Уральский федеральный университет имени первого президента России Б. Н. Ельцина.',
                institute: 'ИРИТ-РТФ',
                specialization: '09.03.01 Информатика и вычислительная техника',
                year: 3,
                group: 'РИ-310912',
                tags: ['front', 'design'],
                about: 'Я имею опыт работы в сфере IT и обладаю знания в области программирования и веб-разработки.'
            }
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchPractices() {
        try {
            this.isLoading = true
            this.practices = await [{
                name: 'Дизайн',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front', 'design'],
            }, {
                name: 'Backend',
                company: 'Контур',
                description: 'Разработка внутренних сервисов и систем, оздание архитектуры и оптимизации кода и.т.д',
                tags: ['back', 'devops'],
            },
                {
                    name: 'Дизайн',
                    company: 'Сбер',
                    description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                    tags: ['front', 'design'],
                }, {
                    name: 'Backend',
                    company: 'Контур',
                    description: 'Разработка внутренних сервисов и систем, оздание архитектуры и оптимизации кода и.т.д',
                    tags: ['back', 'devops'],
                }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchRequest() {
        try {
            this.isLoading = true
            this.request = await {
                name: 'Дизайн',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front', 'design'],
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 8
            }
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchMyRequests() {
        try {
            this.isLoading = true
            this.myRequests = await [{
                name: 'Дизайн',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front', 'design'],
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 8
            }, {
                name: 'Frontend',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front'],
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 8
            }, {
                name: 'Дизайн',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front', 'design'],
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 8
            }, {
                name: 'Frontend',
                company: 'Сбер',
                description: 'Опыт работы над реальными проектами, созданием интерфейсов для приложений и сервисов и.т.д',
                tags: ['front'],
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 8
            }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchUniversityRequest() {
        try {
            this.isLoading = true
            this.universityRequest = await {
                specializations: ['09.03.01 Информатика и вычислительная техника', '09.03.03 Прикладная информатика'],
                name: 'УрФУ',
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 60
            }
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchUniversityRequests() {
        try {
            this.isLoading = true
            this.universityRequests = await [{
                specializations: '09.03.01 Информатика и вычислительная техника',
                name: 'УрФУ',
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 60
            }, {
                specializations:  '09.03.03 Прикладная информатика',
                name: 'ЧелГУ',
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 30
            }, {
                specializations: '09.03.01 Информатика и вычислительная техника',
                name: 'УрФУ',
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 60
            }, {
                specializations:  '09.03.03 Прикладная информатика',
                name: 'ЧелГУ',
                dateSubmission: '22.05.2024',
                datePractice: '01.07.2024-22.07.2024',
                quantity: 30
            }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchNewResponses() {
        try {
            this.isLoading = true
            this.newResponses = await [{
                name: 'УрФУ',
                quantity: 60
            }, {
                name: 'ЧелГУ',
                quantity: 30
            }, {
                name: 'УрФУ',
                quantity: 60
            }, {
                name: 'ЧелГУ',
                quantity: 30
            }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchСheckingResponses() {
        try {
            this.isLoading = true
            this.checkingResponses = await [{
                name: 'УрФУ',
                quantity: 60
            }, {
                name: 'УрГЭУ',
                quantity: 30
            }, {
                name: 'УрГУ',
                quantity: 60
            }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }

    async fetchAgreedResponses() {
        try {
            this.isLoading = true
            this.agreedResponses = await [{
                name: 'УрГЭУ',
                quantity: 60
            }, {
                name: 'УрГППУ',
                quantity: 30
            }, {
                name: 'УрТИСИ СибГУТИ',
                quantity: 60
            },  {
                name: 'УрГПУ',
                quantity: 60
            }, {
                name: 'УПИ',
                quantity: 60
            }]
            this.isLoading = false
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }
}

export const enterpriseStore = new EnterpriseStore()