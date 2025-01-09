<!--
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:17:45
 * @LastEditTime: 2025-01-09 21:14:16
-->
<template>
  <div class="about-container">
    <!-- 头部区域 -->
    <div class="header">
      <div class="name-section">
        <h1>{{ profile.firstName }} <span>{{ profile.lastName }}</span></h1>
      </div>
      <el-avatar :size="120" :src="profile.avatar" />
    </div>

    <!-- 个人简介 -->
    <div class="section">
      <h2>PROFILE</h2>
      <div class="divider"></div>
      <p>{{ profile.description }}</p>
    </div>

    <!-- 工作经验 -->
    <div class="section">
      <h2>EXPERIENCE</h2>
      <div class="divider"></div>
      <div v-for="(job, index) in experience" :key="index" class="experience-item">
        <div class="job-header">
          <div>
            <h3>{{ job.company }}</h3>
            <h4>{{ job.position }}</h4>
          </div>
          <div class="location-date">
            <span><el-icon><Location /></el-icon> {{ job.location }}</span>
            <span>{{ job.period }}</span>
          </div>
        </div>
        <ul>
          <li v-for="(duty, dIndex) in job.duties" :key="dIndex">{{ duty }}</li>
        </ul>
        <div class="tags">
          <el-tag v-for="tech in job.technologies" :key="tech" size="small" effect="plain">
            {{ tech }}
          </el-tag>
        </div>
      </div>
    </div>

    <!-- 联系方式 -->
    <div class="contact-info">
      <div class="contact-item">
        <el-icon><Phone /></el-icon>
        <span>{{ profile.phone }}</span>
      </div>
      <div class="contact-item">
        <el-icon><Message /></el-icon>
        <span>{{ profile.email }}</span>
      </div>
      <div class="contact-item">
        <el-icon><Link /></el-icon>
        <span>{{ profile.website }}</span>
      </div>
      <div class="contact-item">
        <el-icon><Location /></el-icon>
        <span>{{ profile.location }}</span>
      </div>
    </div>

    <!-- 技能部分 -->
    <div class="section">
      <h2>SKILLS</h2>
      <div class="divider"></div>
      <div class="skills-container">
        <div v-for="(skills, category) in skillsets" :key="category" class="skill-group">
          <h4>{{ category }}:</h4>
          <p>{{ skills.join(', ') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Location, Phone, Message, Link } from '@element-plus/icons-vue'

const profile = ref({
  firstName: 'INÊS',
  lastName: 'ALMEIDA',
  avatar: '/path/to/avatar.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  phone: '+44 123 456 789',
  email: 'contact@ines-almeida.com',
  website: 'ines-almeida.com',
  location: 'Portugal'
})

const experience = ref([
  {
    company: 'Super Cool Company',
    position: 'SOFTWARE ENGINEER',
    location: 'Oxford, UK',
    period: 'Jan 2020 - Present',
    duties: [
      'Arcu vitae elementum curabitur vitae nunc sed velit',
      'Viverra aliquet eget sit amet tellus cras adipiscing',
      // ... 其他职责
    ],
    technologies: ['Python', 'Django', 'OOP', 'Javascript', 'HTML', 'CSS', 'Agile']
  }
  // ... 其他工作经历
])

const skillsets = ref({
  'Programming': ['Python', 'HTML (including Jinja)', 'Javascript', 'CSS', 'SASS', 'SQL', 'C#', 'Bash', 'MATLAB'],
  'Frameworks': ['Django', 'Flask', 'Hugo', 'React'],
  'Developer Tools': ['Git', 'Docker', 'Jenkins', 'AWS'],
  'Misc': ['Adobe Tools', 'LaTeX']
})
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  color: #666;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.name-section h1 {
  font-size: 48px;
  color: #888;
  span {
    color: #d4a5a5;
  }
}

.section {
  margin-bottom: 40px;
}

h2 {
  color: #888;
  font-size: 24px;
  margin-bottom: 10px;
}

.divider {
  height: 2px;
  background: linear-gradient(to right, #d4a5a5, transparent);
  margin-bottom: 20px;
}

.experience-item {
  margin-bottom: 30px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.location-date {
  text-align: right;
  color: #999;
}

.tags {
  margin-top: 10px;
  .el-tag {
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #f8e6e6;
    border-color: #d4a5a5;
    color: #666;
  }
}

.contact-info {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #999;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.skill-group {
  h4 {
    color: #666;
    margin-bottom: 5px;
  }
  p {
    color: #999;
  }
}
</style>