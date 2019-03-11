
    const getCourseByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/courses/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const courses = async (obj, args, { firebase }) => {
      
      
      const ref = firebase.database().ref('courses')
      const result = []
      await ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          
          const data = Object.assign({ key: childKey }, childData)
          result.push(data)
        });
      });
      return result
    
    }
  

    const getCourseById = async (obj, args, { firebase }) => {
      const { _id } = args
      
      const ref = firebase.database().ref('courses')
      const result = await new Promise(resolve => {
        ref.orderByChild('_id').equalTo(_id).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const updateCourseByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/courses/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/courses/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const getCourse = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('courses').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const addCourse = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('courses').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateCourse = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('courses').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const removeCourse = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('courses').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    module.exports = {
      Query: {
        getCourseByKey,
courses,
getCourseById
      },
      Mutation: {
        updateCourseByKey,
getCourse,
addCourse,
updateCourse,
removeCourse
      }
    }
  