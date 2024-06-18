<script setup>
    import emailjs from 'emailjs-com';
    import {ref} from 'vue'

    import facebook from '@/assets/images/contacts/facebook.svg';
    import github from '@/assets/images/contacts/github.svg';

    const PUBLIC_KEY = ref("arfTLm3PgNHNFHfov")
    const SERVICE_ID = ref("service_jjgoxsd");
    const TEMPLATE_ID = ref("template_qvfgb79")
    

    const firstname = ref("");
    const lastname = ref("");
    const client_message = ref("");
    const client_email = ref("");
    
    const sendEmail = async (templateParams) => {
        try {
            emailjs.init(PUBLIC_KEY.value);
            const response = await emailjs.send(SERVICE_ID.value, TEMPLATE_ID.value, templateParams);
            alert('Successfully sent')
            // toast.add({ severity: 'success', summary: 'Email Send', detail: 'Successfully send', life: 3000 });
            console.log('Email sent:', response);

        } catch (error) {
            // toast.add({ severity: 'error', summary: 'Email Send', detail: 'Failed to send!!!', life: 3000 });
            alert(`Error send email: ${error}`)
            console.error('Error sending email:', error);
            throw error; 
        }
    };

    const handleSend = async () => {
    try {
        const templateParams = {
            from_name: `${firstname.value} ${lastname.value}`,
            client_message: client_message.value,
            client_email: client_email.value
        };
        await sendEmail(templateParams);
        console.log('Email sent successfully!');
        
        // Optionally, reset form fields after successful send
        firstname.value = '';
        lastname.value = '';
        client_message.value = '';
        client_email.value = '';

    } catch (error) {
        console.error('Failed to send email:', error);
        // Handle the error (e.g., show a user-friendly message)
    }
};

    const contacts = ref([
        {
            label: "Phone",
            value: "+639944732120",
            icon: "pi pi-phone"
        },
        {
            label: "Email",
            value: "angeloreyes.work.033001@gmail.com",
            icon: "pi pi-envelope"
        },
        {
            label: "location",
            value: "Zaragoza, Nueva Ecija",
            icon: "pi pi-user"
        }
    ]);
    
    const socials = ref([
            {
                label: "Facebook",
                icon: facebook,
                to: "https://www.facebook.com/senpai.gelo.30"
            },
            {
                label: "GitHub",
                icon: github,
                to: "https://github.com/angeloreyesWork"
            },
        ]);
</script>
<template>
    <section class=" h-full overflow-auto" >
        <div class=" h-full  px-[5%] md:px-[10%] pt-[80px] grid grid-cols-1  md:grid-cols-2" >
            <div class="p-5 md:p-10" >
                <div class=" p-0 md:p-10 h-auto md:h-full rounded-[20px] flex items-center" >
                    <form @submit.prevent="handleSend" class="w-full bg-slate-700 p-5 md:p-10 rounded-[10px]" >
                        <h1 class="text-[30px] font-black text-center md:text-start" >Let's work together</h1>
                        <p class="mt-3" >Hello there! Excited to connect with you. Whether you have a project in mind or just want to say hello, feel free to drop me a message. Let's turn your ideas into reality!</p>
                        <div class="my-5" >
                            <InputText  v-model="client_email" type="text" placeholder="example@gmail.com" class="w-full" />
                        </div>
                        <div class="my-5 flex justify-evenly gap-5" >
                            <div class="w-full" >
                                <InputText v-model="firstname" type="text" placeholder="Firstname" class="w-full" />
                            </div>
                            <div class="w-full" >
                                <InputText v-model="lastname" type="text" placeholder="Lastname" class="w-full" />
                            </div>
                        </div>
                        <div class="" >
                            <Textarea  v-model="client_message" placeholder="Type your message here." rows="7" class="w-full" ></Textarea>
                        </div>
                        <div class="flex justify-end mt-5" >
                            <Button type="submit" class="w-full md:w-[200px]" label="Send Message" icon="pi pi-send" iconPos="right" />
                        </div>
                    </form>
                </div>
            </div>
            <div class="p-5 md:p-10 h-auto md:h-full rounded-[20px] flex items-center" >
                <div class="grid" >
                    <div v-for="(contact,index) in contacts"  :key="index" class="grid grid-cols-[90px,1fr] items-center gap-5 my-3 " >
                        <div class="h-[80px] w-[80px] bg-slate-700 hover:bg-green-400 rounded-[10px] shadow grid place-content-center" >
                            <i class="text-[30px]" :class="contact.icon" ></i>
                        </div>
                        <div class="grid items-center overflow-auto" >
                            <p class="font-light" >{{contact.label}}</p>
                            <span class="font-semibold truncate" >{{ contact.value }}</span>
                        </div>
                    </div>
                    <div class="my-5" >
                        <h6 class="font-bold uppercase mt-3" >Follow Me</h6>
                        <div class="flex mt-3 mb-20 gap-5" >
                            <a v-for="(social,index) in socials" :key="index" :href="social.to"  target="_blank" class="size-[50px] bg-slate-600 hover:bg-green-400 shadow rounded-[50%] grid place-content-center" >
                                <img :src="social.icon" alt="" class="size-[32px]">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>