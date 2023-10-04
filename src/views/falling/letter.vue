<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Validation</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="nav sidenav">
                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                    <a href="#fully_falling" class="nav-link">Letter</a>
                    <a href="#all_program" class="nav-link">Table</a>
                    <a href="#excel_upload" class="nav-link">Excel</a>
                </div>
            </div>
            <div v-scroll-spy class="row layout-top-spacing">

                <div class="row">
                    <div id="fully_falling" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Fully Falling Program</h4>
                        </div>
                    </div>

                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Letter details</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                    <div class="row" >
                                        <div class="col-md-6 form-group">
                                            <label for="validationCustom01">Systen No :</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="Systen No"
                                                :disabled="isDisabled"
                                                v-model="sytemNo"
                                            />
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <label for="validationCustom01">My Ref :</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                placeholder="My Ref"
                                                v-model="myRef"
                                            />
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-6 form-group">
                                            <label for="validationCustom01">Issued Date :</label>
                                            <flat-pickr 
                                                class="form-control flatpickr active" 
                                                placeholder="Select a issue date"
                                                v-model="issuedDate"
                                                >
                                            </flat-pickr>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <label for="validationCustom01">Received Date :</label>
                                            <flat-pickr 
                                                class="form-control flatpickr active" 
                                                placeholder="Select a received date"
                                                v-model="receivedDate"
                                            >
                                            </flat-pickr>
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <div class="col-md-6 form-group">
                                            <div class="custom-file-container" data-upload-id="myFirstImage">
                                                <label>Upload (PDF File) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
                                                <label class="custom-file-container__custom-file">
                                                    <input type="file" class="custom-file-container__custom-file__custom-file-input" accept="image/*"  @change="onFileSelected"/>
                                                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                    <span class="custom-file-container__custom-file__custom-file-control"></span>
                                                </label>
                                                <div class="custom-file-container__image-preview"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <!-- <h7>ghhh</h7> -->
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary" @click="letterDetail">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="all_program" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">All Program</h4>
                        </div>
                    </div>
                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Table</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row ">
                                    <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                                        <div class="panel br-6 p-0">
                                            <div class="custom-table">
                                                <v-client-table :data="items" :columns="columns" :options="table_option">
                                                    <template #actions="props">
                                                        <div class="actions text-center">
                                                            <a href="javascript:;" class="cancel" @click="delete_row(props.row)">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="1.5"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    class="feather feather-x-circle table-cancel"
                                                                >
                                                                    <circle cx="12" cy="12" r="10"></circle>
                                                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </template>
                                                    <template #salary="props"> ${{ props.row.salary }} </template>
                                                </v-client-table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="excel_upload" class="col-lg-12">
                        <div class="seperator-header">
                            <h4 class="">Upload the Excel File</h4>
                        </div>
                    </div>
                    <div class="col-lg-12 col-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Table (Upload Excel file )</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row ">
                                    <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                                        <div class="panel br-6 p-0">
                                            <div class="custom-table">
                                                <v-client-table :data="excelFiles" :columns="excleColumns" :options="table_option">
                                                    <template #excel="{ row }">
                                                        <div>
                                                            <input type="file" class="form-control form-control-sm" 
                                                            @change="excelFileInputChange($event, row)"
                                                            />
                                                        </div>
                                                    </template>
                                                    <template #action="props">
                                                        <a href="javascript:;" class="cancel" @click="view_row(props.row)">
                                                            <button type="button" class="btn btn-primary btn-sm">View</button>
                                                        </a>
                                                    </template>
                                                </v-client-table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <table>
                                    <tr v-for="(row, index) in uploadExcelData  " :key="index">
                                      <td v-for="(cell, cIndex) in row" :key="cIndex">{{ cell }}</td>
                                    </tr>
                                  </table>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, watch } from 'vue';
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';
    import '@/assets/sass/forms/file-upload-with-preview.min.css';
    import FileUploadWithPreview from 'file-upload-with-preview';
    import { useMeta } from '@/composables/use-meta';
    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';
    import { getAPI } from '../axiosApiSettings';
    import  * as XLSX from 'xlsx'
    useMeta({ title: 'Request' });

    const columns = ref(['name', 'position', 'office', 'age', 'start_date', 'salary', 'actions' ]);
    const excleColumns =  ref (['system_no' , 'my_ref','excel','action']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center' },
        sortable: [],
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        resizableColumns: false,
    });
    //declare the variable
    const sytemNo = ref('');
    const myRef = ref('');
    const issuedDate = ref('');
    const receivedDate = ref('');
    const selectedFile = ref ('');
    const currentDate =ref('');
    const nextNumber = ref('');
    const excelFiles = ref([]);
    const selectedExcelFile = ref('');
    const status =ref(false);
    const fileData = ref([]);
    const uploadExcelData = ref([]);
    
    onMounted(() => {
        getLastId();
        getAllDetails();
        bind_data();
        new FileUploadWithPreview('myFirstImage', {
            images: {
                baseImage: require('@/assets/images/file-preview.png'),
                backgroundImage: '',
            },
        });
    });
    watch(status, (newValue, oldValue) => {
        if(status){
            getLastId();
            getAllDetails();
            status.value = false ;
        }
        console.log('myReactiveValue changed from', oldValue, 'to', newValue);
        // Perform any specific actions based on the change
    });



    const clearForm =() =>{
        myRef.value =  '' ;
        issuedDate.value = '';
        receivedDate.value = '';
        status.value = true ;
    }
    const getLastId = async () =>{
        // Django Api
        // await getAPI.get('/process/lastrowid/')
        // Spring boot 
        await getAPI.get('/forestLetter/LastId')
                .then((response)=>{
                    nextNumber.value = response.data+1;
                    currentDate.value =new Date().toLocaleDateString();
                    sytemNo.value = 'STC/'+currentDate.value+' '+nextNumber.value;
                })
    }
    const getAllDetails = async () =>{
        try{
            await getAPI.get('/process/forestletter/')
            .then((response)=>{
                excelFiles.value = response.data ;
                console.log("test ");
                console.log(excelFiles.value);
                console.log(excelFiles);
                })
        }catch(error){
        }
    }
    const letterDetail =()=>{
        try{
            const formData = new FormData ();
                formData.append('system_no',sytemNo.value);
                formData.append('my_ref',myRef.value);
                formData.append('issued_date',issuedDate.value);
                formData.append('received_date',receivedDate.value);
                formData.append('original_excel',selectedFile.value);
                console.log(formData);
                console.log(selectedFile);
                getAPI.post('/process/forestletter/',{
                    system_no : sytemNo.value,
                    my_ref : myRef.value ,
                    issued_date : issuedDate.value ,
                    received_date : receivedDate.value,
                    original_excel : selectedFile.value
                })
                .then((response)=>{
                    console.log("save the forest letter ");
                    console.log(response);
                    clearForm();
                });
        } catch(error){
            console.log(' An error occurred : ' +error.message);
        }
    };
    const onFileSelected = () => {
        const file =event.target.files[0];
        selectedFile.value = file ;
    };
    const view_row = (item) => {
        console.log("value of selected Excel file :");
        console.log(selectedExcelFile.value);
        
        // const reader = new FileReader();
        // // reader.readAsArrayBuffer(selectedExcelFile);
        // reader.onload = (e) =>{
        //     const data = e.target.result;
        //     const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        //     const firstSheetName = workbook.SheetNames[0];
        //     const worksheet = workbook.Sheets[firstSheetName];
        //     const excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        //     console.log(data);
        //     console.log(workbook);
        //     console.log(firstSheetName);
        //     console.log(worksheet);
        //     console.log(excelData);
        //     // console.log('aaaaa'+data);
        //     // Now you can work with the 'excelData' array containing the data from the Excel file
        //     fileData.value = excelData;
        //     console.log(fileData.value);
        // };
        // reader.readAsArrayBuffer(new Blob([selectedExcelFile]));
    };
    const excelFileInputChange = (event, row) => {
        const file = event.target.files[0]
        selectedExcelFile.value = file ; 
        console.log(selectedExcelFile.value);
        // const reader = new FileReader();
        if(file){
                console.log('upload the excel');
                const reader = new FileReader();
                reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonSheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                uploadExcelData.value = jsonSheetData;
            };
            reader.readAsArrayBuffer(file);
        }
        console.log(uploadExcelData);
    };
    const bind_data = () => {
        items.value = [
            { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '320,800' },
            { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, start_date: '2011/07/25', salary: '170,750' },
            { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, start_date: '2009/01/12', salary: '86,000' },
            { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, start_date: '2012/03/29', salary: '433,060' },
            { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, start_date: '2008/11/28', salary: '162,700' },
            { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, start_date: '2012/12/02', salary: '372,000' },
            { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, start_date: '2012/08/06', salary: '137,500' },
            { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, start_date: '2010/10/14', salary: '327,900' },
            { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, start_date: '2009/09/15', salary: '205,500' },
            { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, start_date: '2008/12/13', salary: '103,600' },
            { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, start_date: '2008/12/19', salary: '90,560' },
            { id: 12, name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, start_date: '2013/03/03', salary: '342,000' },
            { id: 13, name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, start_date: '2008/10/16', salary: '470,600' },
            { id: 14, name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, start_date: '2012/12/18', salary: '313,500' },
            { id: 15, name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, start_date: '2010/03/17', salary: '385,750' },
            { id: 16, name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, start_date: '2012/11/27', salary: '198,500' },
            { id: 17, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, start_date: '2010/06/09', salary: '725,000' },
            { id: 18, name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, start_date: '2009/04/10', salary: '237,500' },
            { id: 19, name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, start_date: '2012/10/13', salary: '132,000' },
            { id: 20, name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, start_date: '2012/09/26', salary: '217,500' },
            { id: 21, name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 61, start_date: '2011/09/03', salary: '345,000' },
            { id: 22, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, start_date: '2009/06/25', salary: '675,000' },
            { id: 23, name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, start_date: '2011/12/12', salary: '106,450' },
            { id: 24, name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', age: 23, start_date: '2010/09/20', salary: '85,600' },
            { id: 25, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, start_date: '2009/10/09', salary: '1,200,000' },
            { id: 26, name: 'Gavin Joyce', position: 'Developer', office: 'Edinburgh', age: 42, start_date: '2010/12/22', salary: '92,575' },
            { id: 27, name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, start_date: '2010/11/14', salary: '57,650' },
        ];
    };
    const delete_row = (item) => {
        if (confirm('Are you sure want to delete selected row ?')) {
            items.value = items.value.filter((d) => d.id != item.id);
        }
    };
    const showMessage = (msg = '', type = 'success') => {
        const toast = window.Swal.mixin({ toast: true, position: 'top', showConfirmButton: false, timer: 3000 });
        toast.fire({ icon: type, title: msg, padding: '10px 20px' });
    };
</script>
