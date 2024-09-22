import {makeAutoObservable} from "mobx";

class InstituteStore {
    profile = {}
    practices = []
    enterpriseRequest = {}
    myRequest = {}
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

    async fetchMyRequest() {
        try {
            this.isLoading = true
            this.myRequest = await {
                name: 'УрФУ',
                specializations: ['09.03.01 Информатика и вычислительная техника', '09.03.03 Прикладная информатика'],
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

    async fetchEnterpriseRequest() {
        try {
            this.isLoading = true
            this.enterpriseRequest = await {
                name: 'Дизайн',
                company: 'Сбер',
                specializations: ['09.03.01 Информатика и вычислительная техника', '09.03.03 Прикладная информатика'],
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
}

export const instituteStore = new InstituteStore()